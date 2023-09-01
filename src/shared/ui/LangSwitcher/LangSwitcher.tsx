import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <Button 
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
 );
}