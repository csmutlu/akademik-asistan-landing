import { useId } from 'react'
import type { ChangeEventHandler, FocusEventHandler } from 'react'
import styles from './Input.module.scss'

export type SelectOption = { value: string; label: string }

type InputProps = {
  label: string
  id?: string
  name?: string
  type?: string
  value?: string
  placeholder?: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  multiline?: boolean
  rows?: number
  options?: SelectOption[]
  autoComplete?: string
  onChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
  onBlur?: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
}

export function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  placeholder,
  hint,
  error,
  required = false,
  disabled = false,
  multiline = false,
  rows = 4,
  options,
  autoComplete,
  onChange,
  onBlur,
}: InputProps) {
  const reactId = useId()
  const fieldId = id ?? reactId
  const hintId = hint ? `${fieldId}-hint` : undefined
  const errorId = error ? `${fieldId}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  const controlClass = [styles.control, error ? styles.invalid : null]
    .filter(Boolean)
    .join(' ')

  const shared = {
    id: fieldId,
    name: name ?? fieldId,
    required,
    disabled,
    className: controlClass,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
  }

  return (
    <div className={styles.field}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.req} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}

      {options ? (
        <select {...shared} value={value} onChange={onChange} onBlur={onBlur}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          {...shared}
          value={value}
          placeholder={placeholder}
          rows={rows}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          {...shared}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
