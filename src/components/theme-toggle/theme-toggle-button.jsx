import React, {useContext} from 'react'
import {Button} from '../button/button'
import { ThemeContext, themes } from '../../contexts/theme-context'

export const ThemeToggleButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique Aqui</Button>
        </div>
    )
}