import { motion } from 'framer-motion';
import { Lock, Users, Shield, Handshake, Key, UserCheck } from 'lucide-react';

const AnimatedBlock = ({ icon: Icon, title, description, delay = 0 }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

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
                stiffness: 260,
                damping: 20
            }
        },
        animate: {
            rotate: [0, -10, 10, -5, 5, 0],
            scale: [1, 1.1, 1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
            }
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center cursor-pointer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
                animate="animate"
            >
                <Icon
                    size={48}
                    className="text-blue-400"
                />
            </motion.div>

            <motion.h3
                className="text-xl font-semibold text-white mb-2"
                variants={textVariants}
            >
                {title}
            </motion.h3>

            <motion.p
                className="text-gray-400 text-sm"
                variants={textVariants}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-white mb-4">
                    Наши Преимущества
                </h1>
                <p className="text-gray-400 text-lg">
                    Современные решения для вашего бизнеса
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <AnimatedBlock
                    icon={Lock}
                    title="Безопасность"
                    description="Надежная защита ваших данных с современным шифрованием"
                    delay={0}
                />

                <AnimatedBlock
                    icon={Handshake}
                    title="Партнерство"
                    description="Долгосрочные отношения и взаимовыгодное сотрудничество"
                    delay={0.2}
                />

                <AnimatedBlock
                    icon={Shield}
                    title="Надежность"
                    description="Проверенные технологии и стабильная работа системы"
                    delay={0.4}
                />

                <AnimatedBlock
                    icon={Users}
                    title="Команда"
                    description="Профессиональная поддержка и индивидуальный подход"
                    delay={0.6}
                />

                <AnimatedBlock
                    icon={Key}
                    title="Доступ"
                    description="Простая авторизация и удобный интерфейс"
                    delay={0.8}
                />

                <AnimatedBlock
                    icon={UserCheck}
                    title="Качество"
                    description="Высокие стандарты и постоянное улучшение сервиса"
                    delay={1.0}
                />
            </div>

            {/* Дополнительные анимированные элементы */}
            <motion.div
                className="fixed top-10 right-10 opacity-20"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Lock size={100} className="text-blue-500" />
            </motion.div>

            <motion.div
                className="fixed bottom-10 left-10 opacity-20"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Handshake size={80} className="text-green-500" />
            </motion.div>
        </div>
    );
};

export default App;