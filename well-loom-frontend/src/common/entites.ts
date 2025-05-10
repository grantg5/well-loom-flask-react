import { baseServicesUrl } from '../utils/properties.ts';
import axios, { AxiosResponse } from 'axios';

export default function generateEntities(): [Record<string, any>] {
    return axios.get(baseServicesUrl + '/entity-schema')
    .then(
        function (response: AxiosResponse): Record<string, any> {
            response.data.forEach(entity => {
                console.log(entity);
            });

            return {"test": 1};
        }
    );
}