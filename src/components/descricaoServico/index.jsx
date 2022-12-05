import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

function DescricaoServico() {

    


    return (
        <>
            <div className="separacao"></div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p>teste</p>
                    <Checkbox size="large" disable />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p>teste</p>
                    <Checkbox size="large" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p>teste</p>
                    <Checkbox size="large" disabled />
                </div>
            </div>
        </>
    )
}

export default DescricaoServico;