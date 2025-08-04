import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SingleselectDropdownProps {
    title: string;
    ids: number[];
    names: string[];
    selectedId: number | '';
    setSelectedId: (id: number | '') => void;
}

export default function SingleselectDropdown({ title, ids, names, selectedId, setSelectedId }: Readonly<SingleselectDropdownProps>) {

    const handleChange = (event: SelectChangeEvent<number | ''>) => {
        const value = event.target.value;
        setSelectedId(value as number | '');
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>{title}</InputLabel>
                <Select
                    value={selectedId}
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