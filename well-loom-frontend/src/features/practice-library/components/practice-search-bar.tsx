import { Area, PracticeGroup, Challenge}  from '@types/types'

export default function PracticeSearchBar() {
    // Default these to inital fetch all call
    const allAreas: Area[]
    const allPracticeGroups: PracticeGroup[]
    const allChallenges: Challenge[]

    const filteredAreas: Area[] = allAreas;
    const filteredPracticeGroups: PracticeGroup[] = allPracticeGroups;
    const filteredChallenges: Challenge[] = allChallenges;

    // These'll track ids
    const selectedAreas: number[]
    const selectedPracticeGroups: number[]
    const selectedChallenges: number[]

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

