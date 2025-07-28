import { Area, WellBeingComponent}  from '@entity_types/entity_types'
import { useAreas, useWellBeingComponents } from '@hooks/cached_entities';

export default function PracticeSearchBar() {
    const { data: allAreas = [], isLoading: areasLoading } = useAreas();

    const filteredAreas: Area[] = allAreas;
    const filteredWellBeingComponents: WellBeingComponent[] = allWellBeingComponents;

    // These'll track ids
    const selectedAreas: number[]
    const selectedWellBeingComponents: number[]

    let searchText: string = "";

    function updateDropdownValues() {
    // For each selected in the changed dropdown, get relationship ids, and union results, updating filters w/ ids that come back

    }

    if (areasLoading || wellBeingComponentsLoading) {
        return <div>Loading...</div>;
    }

    // TODO: Add writting of selected items back to selected vars, refresh components filter when area is updated

    return (
        <div>
            <select>
                {filteredAreas.map(area => <option key={area.id}>{area.area_name}</option>)}
            </select>
            <select>
                {filteredWellBeingComponents.map(comp => <option key={comp.id}>{comp.component_name}</option>)}
            </select>
        </div>
    );
}