import { Area, WellBeingComponent}  from '@types/types'

export default function PracticeSearchBar() {
    // Default these to inital fetch all call
    const allAreas: Area[]
    const allWellBeingComponents: WellBeingComponent[]

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

