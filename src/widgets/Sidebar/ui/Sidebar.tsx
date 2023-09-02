import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const { className } = props;

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
