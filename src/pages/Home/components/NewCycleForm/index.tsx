import { FormContainer, TaskInput, DurationInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        id="task"
        placeholder="add your task name"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="duration">during</label>
      <DurationInput
        type="number"
        id="duration"
        placeholder="00"
        step={1}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('duration', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
