import React, { useState } from 'react';

const PhotosPage = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    password: '',
    email: '',
    photo: null,
    description: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, photo: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div>
      <h1>Фотографії</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Нік:</label>
          <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} required />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Електронна адреса:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Фотографія:</label>
          <input type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
        </div>
        <div>
          <label>Опис фотографії:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Теги:</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} required />
        </div>
        <button type="submit">Завантажити фотографію</button>
      </form>
    </div>
  );
};

export default PhotosPage;