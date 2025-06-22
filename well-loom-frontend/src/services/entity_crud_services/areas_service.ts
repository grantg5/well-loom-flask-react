import { apiClient } from '../base_api';
import { Area } from '@entity_types/entity_types';

export const areasService = {
  getAll: (): Promise<Area[]> => {
    return apiClient.get<Area[]>('/areas')
      .then(response => { return response.data })
      .catch(error => {
        console.error('Failed to fetch areas: ', error);
        throw error;
      });
  }
};