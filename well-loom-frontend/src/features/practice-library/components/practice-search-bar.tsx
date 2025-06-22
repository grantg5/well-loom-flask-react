import { Area, WellBeingComponent}  from '@entity_types/entity_types'
import { areasService } from '../../../services/areas_service'
import { wellBeingComponentsService } from '../../../services/well_being_components_service'

export default function PracticeSearchBar() {
    // Default these to inital fetch all call

    // TODO: Look into react query or other caching mechanism to cache all areas & components

    const allAreas: Area[] = areasService.getAll()
    const allWellBeingComponents: WellBeingComponent[] = wellBeingComponentsService.getAll()

    const filteredAreas: Area[] = allAreas;
    const filteredWellBeingComponents: WellBeingComponent[] = allWellBeingComponents;

    // These'll track ids
    const selectedAreas: number[]
    const selectedWellBeingComponents: number[]

    let searchText: string = "";

    function updateDropdownValues() {
    // For each selected in the changed dropdown, get relationship ids, and union results, updating filters w/ ids that come back

    }

    // Put dropdowns here

    return (
        <div>Coming soon</div>
    );
}

export function Dropdown(options: {id: number, name: string}[], selected: number[]) {
    // TODO: Define dropdown in here
}

