import React, { useEffect, useState } from 'react';
import { CloseOutlined, CameraOutlined } from '@ant-design/icons';
import { notification, Spin } from 'antd';
import './UserInfo.scss';
import useAuth from '../../hooks/useAuth';
import dayjs from 'dayjs';
import api from './api';

interface UserInfoProps {
  userInfo: any;
  userDetails: any;
  permission: any;
}

const UserInfo: React.FC<UserInfoProps> = ({
  userInfo,
  userDetails,
  permission,
}) => {
  const auth = useAuth();
  const birthdayFormat = dayjs(new Date(userInfo?.birthday)).format('DD MMMM');
  const [isLoading, setIsloading] = useState(false);
  const [uploadAvatar, setUploadAvatar] = useState<File>();

  const handleChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList?.length) return;
    setUploadAvatar(fileList[0]);
  };

  const handleDeleteAvatar = async () => {
    setIsloading(true);

    try {
      const response = await api.deleteAvatar(userInfo?.avatar?.id);
      if (
        response.status === 200 &&
        response.statusText.toLowerCase() === 'ok'
      ) {
        const { data } = await api.getProfile();
        auth.setUser(data);
      } else {
        throw new Error('Попробуйте еще раз');
      }
    } catch (error: any) {
      notification.info({
        message: 'Ошибка',
        description: error.message,
      });
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (typeof uploadAvatar === 'undefined') return;

    const dataArray = new FormData();
    dataArray.append('file', uploadAvatar);
    dataArray.append('client_id', userInfo.client_id);
    dataArray.append(
      'type',
      permission?.permission?.crate === 'create_avatar' ? '2' : '1'
    );

    // IIFE
    (async function anyNameFunction() {
      setIsloading(true);

      try {
        const response = await api.updateAvatar(dataArray);

        if (
          response.status === 200 &&
          response.statusText.toLowerCase() === 'ok'
        ) {
          const { data } = await api.getProfile();
          auth.setUser(data);
        } else {
          throw new Error('Попробуйте еще раз');
        }
      } catch (error) {
        notification.info({
          message: 'Notification',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      } finally {
        setIsloading(false);
      }
    })();
  }, [uploadAvatar]);

  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <Spin tip="Loading..." spinning={isLoading}>
          <img
            className="user-info__avatar-image"
            src={`https://mycent.kz/${userInfo?.avatar?.link}`}
            alt="фото"
          />
          {(userInfo?.id === permission?.id ||
            permission?.permission?.crate === 'create_avatar') && (
            <label className="user-info__avatar-button-upload">
              <input
                onChange={handleChangeAvatar}
                type="file"
                accept=".jpg, .jpeg, .png"
                hidden
              />
              <CameraOutlined />
            </label>
          )}
          {typeof userInfo?.avatar?.id !== 'undefined' &&
            (permission?.permission?.crate === 'create_avatar' ||
              userInfo?.id === permission?.id) && (
              <button
                className="user-info__avatar-button-delete"
                onClick={handleDeleteAvatar}
                type="button"
              >
                <CloseOutlined />
              </button>
            )}
        </Spin>
      </div>
      <div className="user-info__about">
        <div className="user-info__heading">
          <h3 className="user-info__name">{userInfo?.full_name}</h3>
          <h4 className="user-info__duty">{userDetails?.duty}</h4>
        </div>
        <ul className="user-info__additional-info">
          <li className="user-info__additional-info-item">
            <span className="user-info__additional-info-title">
              День рождения:
            </span>
            <span className="user-info__additional-info-text">
              {birthdayFormat}
            </span>
          </li>
          <li className="user-info__additional-info-item">
            <span className="user-info__additional-info-title">
              Образование:
            </span>
            <span className="user-info__additional-info-text">
              {userDetails?.edu}
            </span>
          </li>
          <li className="user-info__additional-info-item">
            <span className="user-info__additional-info-title">Город:</span>
            <span className="user-info__additional-info-text">
              {userDetails?.city}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
