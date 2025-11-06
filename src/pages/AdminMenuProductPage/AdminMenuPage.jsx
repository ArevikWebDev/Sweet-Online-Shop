import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { postMenu } from "@/store/slices/menuSlice/menuSliceApi";

const validationSchema = Yup.object({
  name_hy: Yup.string().required("Name in Armenian is required"),
  name_en: Yup.string().required("Name in English is required"),
  name_ru: Yup.string().required("Name in Russian is required"),
  description_hy: Yup.string().required("Description in Armenian is required"),
  description_en: Yup.string().required("Description in English is required"),
  description_ru: Yup.string().required("Description in Russian is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  image: Yup.string().required("Image is required"),
  type: Yup.string().required("Product type is required"),
});

function AdminMenuPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Menu
      </h2>

      <Formik
        initialValues={{
          name_hy: "",
          name_en: "",
          name_ru: "",
          description_hy: "",
          description_en: "",
          description_ru: "",
          price: "",
          image: "",
          type: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postMenu(values));
          resetForm();
          setImagePreview(null);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="flex flex-col gap-6 p-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Name (Armenian)</Label>
                <Field
                  as={Input}
                  name="name_hy"
                  placeholder="Menu name in Armenian"
                />
                <ErrorMessage
                  name="name_hy"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Name (English)</Label>
                <Field
                  as={Input}
                  name="name_en"
                  placeholder="Menu name in English"
                />
                <ErrorMessage
                  name="name_en"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <Label>Name (Russian)</Label>
                <Field
                  as={Input}
                  name="name_ru"
                  placeholder="Menu name in Russian"
                />
                <ErrorMessage
                  name="name_ru"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Description Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >
              <div className="flex flex-col gap-2">
                <Label>Description (Armenian)</Label>
                <Field
                  as={Textarea}
                  name="description_hy"
                  placeholder="Description in Armenian..."
                  rows={3}
                />
                <ErrorMessage
                  name="description_hy"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Description (English)</Label>
                <Field
                  as={Textarea}
                  name="description_en"
                  placeholder="Description in English..."
                  rows={3}
                />
                <ErrorMessage
                  name="description_en"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-2">
                <Label>Description (Russian)</Label>
                <Field
                  as={Textarea}
                  name="description_ru"
                  placeholder="Description in Russian..."
                  rows={3}
                />
                <ErrorMessage
                  name="description_ru"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Price and Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Price</Label>
                <Field
                  as={Input}
                  type="number"
                  name="price"
                  placeholder="Price"
                  min={0}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label>Type</Label>
                <Select
                  value={values.type}
                  onValueChange={(value) => setFieldValue("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trufel">Truffle</SelectItem>
                    <SelectItem value="desert">Dessert</SelectItem>
                    <SelectItem value="drink">Drink</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-2 ">
              <Label>Image</Label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFieldValue("image", reader.result);
                      setImagePreview(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              {imagePreview && (
                <div className="mt-3 flex justify-center sm:justify-start">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full sm:w-1/2 bg-black hover:bg-black-500  text-white transition-all"
              >
                Add Menu
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AdminMenuPage;
