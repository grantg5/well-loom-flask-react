import { Area }  from '@entity_types/entity_types';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import MultiselectDropdown from '../../../common/common_components/multiselect_dropdown';

export default function PracticeSearchBar() {
    const allAreas: Area[] = useLoaderData();

    // These'll track ids
    const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

    return (
        <div>
            <MultiselectDropdown
                title="Areas"
                ids={allAreas.map(area => area.id)}
                names={allAreas.map(area => area.area_name)}
                selectedIds={selectedAreas}
                setSelectedIds={setSelectedAreas}
            />
        </div>
    );
}