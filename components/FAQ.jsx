'use client'
import React from 'react'
import { Collapse, ConfigProvider } from 'antd'
export default function FAQ() {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
    ];
    const onChange = key => {
        console.log(key);
    };
    return (
        <div className='section flex flex-col items-center  mb-5'>
            <h2 className='title mb-10'>Everything You Need to Know About Our Services and Solutions</h2>
            <ConfigProvider
                theme={{
                    components: {
                        Collapse: {
                            headerBg: '#f9f2e5'
                        },
                    },
                }}
            >
                <Collapse size='large' className='w-full' items={items} defaultActiveKey={['1']} onChange={onChange} />
            </ConfigProvider>
        </div>
    )
}
