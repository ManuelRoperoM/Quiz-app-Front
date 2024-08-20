import {Option} from '../declarations/types'

interface Props {
    options : Option[];
    // onSelect: (value: boolean) => void
    chooseValue: (value: Option) => void;
    selectedOption: Option | null;
}

export const Options : React.FC<Props> = ({options, chooseValue, selectedOption}) => {
      
  return(
    <form>
      <fieldset className='options'>
        <legend>Choose a options:</legend>
        {
          options.map((option) => {
            return(
              <label key={option.option}>
                <input 
                  type="radio" 
                  name='option' 
                  value={option.option} 
                  checked={selectedOption?.option === option.option}
                  onChange={() => {chooseValue(option)}}
                />
                {option.value}
              </label>
            )
          })
        }
      </fieldset>
    </form>
  )
}
