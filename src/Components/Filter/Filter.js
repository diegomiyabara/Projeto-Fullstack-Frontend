import { FormControl, InputLabel, Select, TextField } from '@material-ui/core'
import React from 'react'
import {MainContainer, Button} from './styles'
import useForm from '../../Hooks/useForm'

const Filter = () => {
    const {form, onChange, resetForm} = useForm({albumHash:"", dateFilter: ""})
    const handleInputChange = event => {
        const {name, value} = event.target
        onChange(name, value)
    }
    return (
        <form>
            <MainContainer>
                <TextField 
                label="Nome do álbum" 
                variant="outlined"
                type="text"
                name="albumHash"
                placeholder="Busque pelo nome do álbum"
                value={form.albumHash}
                required
                onChange={handleInputChange}
                />
                <FormControl variant="outlined">
                <InputLabel htmlFor="dateFilter">Ordernar por data</InputLabel>
                <Select 
                    native
                    id="dateFilter" 
                    label="Ordenar por data"
                    value={form.dateFilter}
                    onChange={handleInputChange}
                    inputProps={{
                        name: 'dateFilter',
                        id:'dateFilter'
                    }}
                >
                    <option value="DESC">Mais recentes</option>
                    <option value="ASC">Mais antigas</option>
                </Select>
                </FormControl>
                <Button>Filtrar</Button>
            </MainContainer>
        </form>
    )
}

export default Filter