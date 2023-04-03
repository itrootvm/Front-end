import axios from '@services/api';

// interface IFile {
//     id: number | undefined;
//     recruiting_id: number | undefined;
//     fileName: string | undefined;
// }

const api = {
    getReqisterValues: (data: any) =>
    axios.post('http://127.0.0.1:8000/register', {data: data}),


      
    // getMyApplicationData: () => axios.get('/recruiting'),
        // getApplicationById: (id: number) => axios.get(`/recruiting/${id}`),
            // getInterviewCandidate: () => axios.get('/recruiting-candidate'),
            //     getCandidateById: (id: string) => axios.get(`/recruiting-candidate/${id}`),
        
            //                     saveNewApplication: (data: any) => axios.post('/recruiting', data),
            //                         saveApplicationCandidate: (data: any) =>
            //                             axios.post('recruiting-candidate/save', data),
};

export default api;
