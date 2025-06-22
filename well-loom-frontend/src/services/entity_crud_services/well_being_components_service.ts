import { apiClient } from '../base_api';
import { WellBeingComponent } from '@entity_types/entity_types';

export const wellBeingComponentsService = {
  getAll: async (): Promise<WellBeingComponent[]> => {
    return apiClient.get<WellBeingComponent[]>('/well_being_components')
          .then(response => { return response.data })
          .catch(error => {
            console.error('Failed to fetch well being components: ', error);
            throw error;
          });
  }
};