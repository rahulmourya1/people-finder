// src/components/ProfileForm/ProfileForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ProfileForm.css'; // Optional: For custom styling

const ProfileForm = ({ profile, onClose, onSubmit }) => {
  const isEdit = Boolean(profile);

  const initialValues = {
    name: profile ? profile.name : '',
    email: profile ? profile.email : '',
    phone: profile ? profile.phone : '',
    photo: profile ? profile.photo : '',
    description: profile ? profile.description : '',
    address: {
      street: profile ? profile.address.street : '',
      city: profile ? profile.address.city : '',
      state: profile ? profile.address.state : '',
      zipcode: profile ? profile.address.zipcode : '',
      geo: {
        lat: profile ? profile.address.geo.lat : '',
        lng: profile ? profile.address.geo.lng : ''
      }
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, 'Invalid phone number')
      .required('Phone number is required'),
    photo: Yup.string().url('Invalid URL').required('Photo URL is required'),
    description: Yup.string().required('Description is required'),
    address: Yup.object({
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zipcode: Yup.string()
        .matches(/^\d{6}$/, 'Invalid Zipcode')
        .required('Zipcode is required'),
      geo: Yup.object({
        lat: Yup.number()
          .required('Latitude is required')
          .typeError('Latitude must be a number'),
        lng: Yup.number()
          .required('Longitude is required')
          .typeError('Longitude must be a number')
      })
    })
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const profileData = {
      ...values,
      id: isEdit ? profile.id : undefined // Let JSON Server assign ID
    };
    onSubmit(isEdit ? profile.id : undefined, profileData);
    setSubmitting(false);
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="profile-form space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Field name="name" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field name="email" type="email" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <Field name="phone" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo URL</label>
            <Field name="photo" type="url" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="photo" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Field name="description" as="textarea" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>

          <h3 className="text-lg font-semibold">Address</h3>

          <div>
            <label htmlFor="address.street" className="block text-sm font-medium text-gray-700">Street</label>
            <Field name="address.street" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.street" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="address.city" className="block text-sm font-medium text-gray-700">City</label>
            <Field name="address.city" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.city" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="address.state" className="block text-sm font-medium text-gray-700">State</label>
            <Field name="address.state" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.state" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="address.zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
            <Field name="address.zipcode" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.zipcode" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="address.geo.lat" className="block text-sm font-medium text-gray-700">Latitude</label>
            <Field name="address.geo.lat" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.geo.lat" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label htmlFor="address.geo.lng" className="block text-sm font-medium text-gray-700">Longitude</label>
            <Field name="address.geo.lng" type="text" className="mt-1 p-2 border rounded w-full" />
            <ErrorMessage name="address.geo.lng" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isEdit ? 'Update Profile' : 'Add Profile'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
