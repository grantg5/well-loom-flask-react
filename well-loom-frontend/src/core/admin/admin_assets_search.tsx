import { useState } from 'react';
import SingleselectDropdown from '../../common/common_components/singleselect_dropdown';

const ASSET_TYPES = [
    { id: 1, name: 'Areas' },
    { id: 2, name: 'Components' },
    { id: 3, name: 'Practices' }
];

export function AdminAssetsSearch() {
    const [selectedAssetType, setSelectedAssetType] = useState<number | ''>('');

    return (
        <div>
            <SingleselectDropdown
                title="Asset Type"
                ids={ASSET_TYPES.map(type => type.id)}
                names={ASSET_TYPES.map(type => type.name)}
                selectedId={selectedAssetType}
                setSelectedId={setSelectedAssetType}
            />
        </div>
    );
}