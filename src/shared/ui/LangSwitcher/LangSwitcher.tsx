import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Button, ThemeButton } from '../Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};
