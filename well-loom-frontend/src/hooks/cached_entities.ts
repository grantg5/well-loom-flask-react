import { useQuery } from '@tanstack/react-query';
import { areasService } from 'services/entity_crud_services/areas_service';
import { wellBeingComponentsService } from 'services/entity_crud_services/well_being_components_service';

export const useAreas = () => {
    return useQuery({
        queryKey: ['allAreas'],
        queryFn: areasService.getAll,
        staleTime: Infinity
    })
}

export const useWellBeingComponents = () => {
    return useQuery({
        queryKey: ['allWellBeingComponents'],
        queryFn: wellBeingComponentsService.getAll,
        staleTime: Infinity
    })
}