import {Option} from '../declarations/types'

interface Props {
    options : Option[]
}

export const Options : React.FC<Props> = ({options}) => {
  return(
    <form>
      <fieldset>
        <legend>Choose a options:</legend>
        <label>
          {
            options.map((option) => {
              return(
                <div>
                  <input type="radio" name='option' value={option.option}/>
                  {option.value}
                </div>
              )
            })
          }
          <button>Accept</button>
        </label>
      </fieldset>
    </form>
  )
}
