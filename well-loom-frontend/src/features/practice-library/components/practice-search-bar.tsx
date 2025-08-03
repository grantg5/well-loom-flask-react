import { Area }  from '@entity_types/entity_types';
import { useLoaderData } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export default function PracticeSearchBar() {
    const allAreas: Area[] = useLoaderData();
    const filteredAreas: Area[] = allAreas;

    // These'll track ids
    const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

    const handleAreaChange = (event: SelectChangeEvent<number[]>) => {
        const value = event.target.value;
        setSelectedAreas(typeof value === 'string' ? [] : value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="areas-select-label">Areas</InputLabel>
                <Select
                    labelId="areas-select-label"
                    label="Areas"
                    multiple
                    value={selectedAreas}
                    onChange={handleAreaChange}
                >
                    {filteredAreas.map(area => (
                        <MenuItem key={area.id} value={area.id}>
                            {area.area_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}