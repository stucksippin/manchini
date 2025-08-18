'use client'
import { motion } from 'framer-motion'
import { Shield, Key, Users, Award, Star, TrendingUp, MapPin } from 'lucide-react'

export default function BenefitsBlock() {
    const dataBenefits = [
        {
            id: 1,
            icon: Shield,
            title: 'Экспертиза и надежность',
            discription: 'Наша команда — это опытные риелторы и юристы, которые помогут вам безопасно и выгодно купить или продать недвижимость. Мы берем на себя все сложности сделки, чтобы вы получили идеальный результат без лишних хлопот.',
        },
        {
            id: 2,
            icon: Key,
            title: 'Доступ к закрытым лотам',
            discription: 'Работая с Manchini, вы получаете доступ к лучшим объектам, которых нет в открытой продаже. Мы сотрудничаем с застройщиками и частными владельцами, предлагая вам уникальные варианты элитной недвижимости.',
        },
        {
            id: 3,
            icon: Users,
            title: 'Персональный подход',
            discription: 'Мы не просто подбираем квартиры и дома — мы учитываем ваш образ жизни, вкусы и планы. Наша цель — найти для вас не просто жилье, а место, где будет комфортно именно вам.',
        },
    ]

    const dataRating = [
        {
            id: 1,
            number: '10+',
            icon: Award,
            title: 'Лет на рынке элитной недвижимости. Мы работаем с 2013 года и знаем все тонкости сделок с премиальными объектами. '
        },
        {
            id: 2,
            number: '4.8/5',
            icon: Star,
            title: 'Средняя оценка наших клиентов. Нас рекомендуют за профессионализм, честность и внимание к деталям. '
        },
        {
            id: 3,
            number: '20+',
            icon: TrendingUp,
            title: 'Объектов продано в этом году. Помогаем клиентам находить идеальную недвижимость без переплат и рисков.'
        },
        {
            id: 4,
            number: '1.3k',
            icon: MapPin,
            title: 'Довольных клиентов по всему миру. Наши покупатели и продавцы — это состоятельные люди, которые ценят надежность.'
        },
    ]


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    }

    const benefitCardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            y: -15,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
            }
        },
        animate: {
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
            }
        }
    }


    const statCardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotateY: 90
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            rotateY: 5,
            transition: {
                duration: 0.3
            }
        }
    }


    const numberVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.4
            }
        }
    }


    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className='section bg-[#121a1f] text-white'>
            <div className='container mx-auto'>
                {/* Заголовок с анимацией */}
                <motion.div
                    className='flex flex-col text-center p-10'
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        ⌂ Преимущества сервиса
                    </motion.span>
                    <motion.h2
                        className='title'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Открой для себя преимущества
                    </motion.h2>
                </motion.div>

                {/* Карточки преимуществ с анимацией */}
                <motion.div
                    className='flex mx-auto justify-between gap-x-10'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {dataBenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.id}
                                className='flex flex-col w-[367px] min-h-[550px] bg-gradient-to-b from-[#1a2530] to-[#121a1f] rounded-lg p-6 border border-gray-700/50'
                                variants={benefitCardVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Анимированная иконка вместо изображения */}
                                <motion.div
                                    className='h-[200px] flex items-center justify-center mb-6'
                                    variants={iconVariants}
                                    animate="animate"
                                >
                                    <div className='relative'>
                                        <IconComponent
                                            size={120}
                                            className='text-blue-400'
                                        />
                                        {/* Декоративные элементы */}
                                        <motion.div
                                            className='absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-70'
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.7, 0.3, 0.7]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.5
                                            }}
                                        />
                                        <motion.div
                                            className='absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-50'
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                delay: index * 0.7
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                <motion.h2
                                    className='mt-3 text-xl font-semibold text-center'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {benefit.title}
                                </motion.h2>

                                <motion.p
                                    className='mt-3 flex-grow text-gray-300 leading-relaxed text-center'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {benefit.discription}
                                </motion.p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Разделитель с анимацией */}
                <motion.hr
                    className='my-10 border-gray-600'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                />

                {/* Статистические карточки */}
                <motion.div
                    className='flex justify-between mt-10 text-center gap-x-10'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {dataRating.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                className='flex flex-col justify-center w-[270px] h-[270px] bg-gradient-to-br from-[#171F24] to-[#0f1419] text-white p-5 rounded-lg border border-gray-700/30 cursor-pointer'
                                variants={statCardVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className='flex justify-center mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    viewport={{ once: true }}
                                >
                                    <IconComponent size={32} className='text-blue-400' />
                                </motion.div>

                                <motion.span
                                    className='text-5xl mb-4 font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'
                                    variants={numberVariants}
                                >
                                    {item.number}
                                </motion.span>

                                <motion.span
                                    className='text-gray-300 leading-relaxed'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {item.title}
                                </motion.span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}