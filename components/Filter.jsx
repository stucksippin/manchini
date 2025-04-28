import { Checkbox, InputNumber, Select, Slider } from 'antd'
import React from 'react'

export default function Filter() {
    return (
        <div className='filter w-[350px] max-h-[690px] mx-auto   bg-[#f9f2e5] p-5 rounded-lg'>
            <div className='filter_block'>
                <span className='font-semibold'>Цена</span>
                <Slider className='w-[300px]' range={{ draggableTrack: true }} defaultValue={[20, 50]} />
                <div>
                    <span className='mr-2'>от</span>
                    <InputNumber min={20} max={50} defaultValue={20} />
                    <span className='mr-2 ml-2'>до</span>
                    <InputNumber min={20} max={50} defaultValue={50} />
                </div>
            </div>

            <div className='filter_block'>
                <span className='font-semibold'>Количество комнат</span>
                <Checkbox>1 комната</Checkbox>
                <Checkbox>2 комнаты</Checkbox>
                <Checkbox>3 комнаты</Checkbox>
                <Checkbox>4 комнаты</Checkbox>
                <Checkbox>5 комнат и больше</Checkbox>
            </div>

            <div className='filter_block'>
                <span className='font-semibold'>Площадь</span>
                <div>
                    <span className='mr-2'>от</span>
                    <InputNumber min={20} max={50} defaultValue={20} />
                    <span className='mr-2 ml-2'>до</span>
                    <InputNumber min={20} max={50} defaultValue={50} />
                </div>

            </div>
            <div className='filter_block'>
                <span className='font-semibold'>Тип жилья</span>
                <Checkbox>Новостройка</Checkbox>
                <Checkbox>Вторичка</Checkbox>
                <Checkbox>Аппартаменты</Checkbox>
                <Checkbox>Дом</Checkbox>
                <Checkbox>5 комнат и больше</Checkbox>
            </div>
            <div className='filter_block'>
                <span className='font-semibold'>Город</span>
                <Select
                    className='w-[300px]'
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="label"

                    options={[
                        {
                            value: 'Rostov-on-don',
                            label: 'Ростов-на-Дону',
                        },
                        {
                            value: 'Moscow',
                            label: 'Москва',
                        },
                        {
                            value: 'Saint-Petersburg',
                            label: 'Санкт-Петербург',
                        },
                    ]} />
            </div>


        </div>
    )
}
