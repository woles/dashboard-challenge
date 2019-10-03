import {
  Chip,
  createStyles,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core'
import { Replay } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

type FilterProps = {
  keys: string[],
  name: string,
  onChange: (name: string, filterValues: string[]) => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: 2,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    clean: {
      cursor: 'pointer',
      fontSize: 14,
      marginLeft: 70,
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 15,
    },
  }),
)

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export const Filter: React.FC<FilterProps> = ({ keys, name, onChange }) => {

  const classes = useStyles()

  const [filterValues, setFilterValues] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterValues(event.target.value as string[])
  }

  const handleDelete = (event: React.ChangeEvent<{ parentElement: HTMLElement }>) => {
    setFilterValues(filterValues.filter(
      (key) => key !== event.currentTarget.parentElement.childNodes[0].childNodes[0].textContent,
    ))
  }

  const handleClear = () => {
    setFilterValues([])
  }

  useEffect(() => {
    onChange(name.toLowerCase() + 's', filterValues)
    // eslint-disable-next-line
  }, [filterValues])

  const selectValue = (selected: unknown) => (
    <div className={classes.chips}>
      {(selected as string[]).map((value) => (<Chip key={value} label={value} onDelete={handleDelete} />))}
    </div>
  ) as React.ReactNode

  const menuItems = keys.map((key) => (
    <MenuItem key={key} value={key}>
      {key}
    </MenuItem>
  ))

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">{name}</InputLabel>
        <Replay className={classes.clean} onClick={handleClear} />
        <Select
          multiple={true}
          value={filterValues}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selectValue}
          MenuProps={MenuProps}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  )
}
