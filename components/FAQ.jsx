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
            label: 'Как подобрать элитную недвижимость через Manchini?',
            children: <p>Наши эксперты предлагают индивидуальный подбор объектов по вашим критериям: от апартаментов в центре Москвы до зарубежной недвижимости. Мы работаем с закрытыми базами и предоставляем эксклюзивные варианты.</p>,
        },
        {
            key: '2',
            label: 'Какие гарантии безопасности сделки вы предоставляете?',
            children: <p>Все сделки сопровождаются нашими юристами. Мы проводим полную проверку юридической чистоты объекта, помогаем с оформлением документов и сопровождаем сделку до регистрации права собственности.</p>,
        },
        {
            key: '3',
            label: 'Есть ли у вас услуга trade-in для недвижимости?',
            children: <p>Да, мы предлагаем программу обмена вашей текущей недвижимости на более престижный вариант с выгодными условиями и минимальными временными затратами с вашей стороны.</p>,
        },
        {
            key: '4',
            label: 'Как оценить стоимость моей элитной недвижимости?',
            children: <p>Наши специалисты проводят комплексный анализ рынка, учитывая уникальные особенности объекта, его локацию, инфраструктуру и текущий спрос. Вы получите точный отчёт с обоснованием цены.</p>,
        },
        {
            key: '5',
            label: 'Работаете ли вы с зарубежной недвижимостью?',
            children: <p>Да, мы сотрудничаем с проверенными партнёрами в 20+ странах. Поможем подобрать объект, оформить сделку и решить все юридические вопросы при покупке недвижимости за границей.</p>,
        },
    ];
    const onChange = key => {
        console.log(key);
    };
    return (
        <div className='section flex flex-col items-center  mb-5 mt-10'>
            <h2 className='title mb-10'>Всё, что нужно знать о наших услугах и решениях</h2>
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
