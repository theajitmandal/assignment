//client server validation ---> @ is missing in email, password weak
//server side validation ---> this password was used 3 months ago
//formik ---> to handle advance form actions
//yup --> validator, alternative: joi, zod

'use client'
import React, {useRef} from 'react';
import { useFormik } from 'formik';
import { Input } from "@nextui-org/react";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const SignupForm = () => {
    const inputRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <Input
                isClearable
                // ref = {inputRef}
                name="firstName"
                type="firstName"
                label="firstName"
                variant="bordered"
                placeholder="Enter your firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className="max-w-xs"
                onClear = {() => {
                    // inputRef.current.value = '' //trying to use useRef
                    formik.setFieldValue("firstName", '')
                }}
            />
            {formik.errors.firstName}
            <label htmlFor="lastName">Last Name</label>
            <Input
                isClearable
                name="lastName"
                type="lastName"
                label="lastName"
                variant="bordered"
                placeholder="Enter your lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
            />
            {formik.errors.lastName}
            <label htmlFor="email">Email Address</label>
            <Input
                isClearable
                name="email"
                type="email"
                label="Email"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue="junior@nextui.org"
                onChange={formik.handleChange}
                value={formik.values.email}
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
            />
            {formik.errors.email}
            <label htmlFor="email">Password</label>
            <Input
                isClearable
                name="password"
                type="password"
                label="password"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue="junior@nextui.org"
                onChange={formik.handleChange}
                value={formik.values.password}
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
            />
            {formik.errors.password}
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm