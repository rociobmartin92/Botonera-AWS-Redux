import React from "react"
import { render, screen } from '@testing-library/react'
import FormSubmitButton, { FormSubmitButtonProps } from './FormSubmitButton';
import * as Formik from 'formik';

const props: FormSubmitButtonProps = { children: "", testId: "btnSubmit" }


describe("<FormSubmitButton/> Component", () => {
	beforeEach(() => {
		/** @see https://stackoverflow.com/a/69968283 */
		const useFormikContextMock = jest.spyOn(Formik, "useFormikContext")
		useFormikContextMock.mockReturnValue({ errors: {} } as unknown as any)
	})

	it("Should render correctly", () => {
		render(<FormSubmitButton {...props} />)
		const inputElement = screen.getByTestId(props.testId!)
		expect(inputElement).toBeInTheDocument()
	})
})

