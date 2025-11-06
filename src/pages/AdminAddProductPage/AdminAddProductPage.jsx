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
import { addProduct } from "@/store/slices/productSlice/productSliceApi";

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

function AdminAddProductPage() {
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Add New Product
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
            dispatch(addProduct(values));
            resetForm();
            setImagePreview(null);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="flex flex-col gap-8">
              {/* Names Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Label>Name (Armenian)</Label>
                  <Field
                    as={Input}
                    name="name_hy"
                    placeholder="Product name in Armenian"
                  />
                  <ErrorMessage
                    name="name_hy"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Name (English)</Label>
                  <Field
                    as={Input}
                    name="name_en"
                    placeholder="Product name in English"
                  />
                  <ErrorMessage
                    name="name_en"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label>Name (Russian)</Label>
                  <Field
                    as={Input}
                    name="name_ru"
                    placeholder="Product name in Russian"
                  />
                  <ErrorMessage
                    name="name_ru"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="text-red-500 text-sm"
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
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
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
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Price & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="text-red-500 text-sm"
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
                    </SelectContent>
                  </Select>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="flex flex-col gap-2">
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
                  className="border rounded-lg p-2"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-3 w-40 h-40 object-cover rounded-lg border mx-auto sm:mx-0"
                  />
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-1/2 mt-4"
                >
                  Add Product
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AdminAddProductPage;
