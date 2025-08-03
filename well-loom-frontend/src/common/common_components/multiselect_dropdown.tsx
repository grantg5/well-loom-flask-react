import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface MultiselectDropdownProps {
    title: string;
    ids: number[];
    names: string[];
    selectedIds: number[];
    setSelectedIds: (ids: number[]) => void;
}

export default function MultiselectDropdown({ title, ids, names, selectedIds, setSelectedIds }: Readonly<MultiselectDropdownProps>) {

    const handleChange = (event: SelectChangeEvent<number[]>) => {
        const value = event.target.value;
        // No ids returns "" instead of [], so converting to array
        setSelectedIds(typeof value === 'string' ? [] : value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>{title}</InputLabel>
                <Select
                    multiple
                    value={selectedIds}
                    onChange={handleChange}
                >
                    {ids.map((id, index) => (
                        <MenuItem key={id} value={id}>
                            {names[index]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}