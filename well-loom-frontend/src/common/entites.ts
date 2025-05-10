import { baseServicesUrl } from '../utils/properties.ts';
import axios from 'axios';

const entities = axios.get(baseServicesUrl + '/entity-schema')
    .then(
        // TODO: Generate maps based on what comes back
    );