import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    contactNumber: '',
    email: '',
    type: 'viewer',
    username: '',
    password: '',
    address: '',
    isActive: true,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(formData);

      navigate('/auth/signin');
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account with the same monochrome layout pattern and shared button treatment.
      </p>

      {error && (
        <p className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>

            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="First Name"
              autoComplete="given-name"
              className={inputClasses}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>

            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              autoComplete="family-name"
              className={inputClasses}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-zinc-700">
              Username
            </label>

            <input
              name="username"
              type="text"
              placeholder="Username"
              className={inputClasses}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Age
            </label>

            <input
              name="age"
              type="text"
              placeholder="Age"
              className={inputClasses}
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-zinc-700">
              Gender
            </label>

            <select
              name="gender"
              className={inputClasses}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-700">
              Contact Number
            </label>

            <input
              name="contactNumber"
              type="text"
              placeholder="09XXXXXXXXX"
              className={inputClasses}
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
            Email
          </label>

          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="email@example.com"
            autoComplete="email"
            className={inputClasses}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>

          <input
            id="signup-password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-700">
            Address
          </label>

          <textarea
            name="address"
            rows="3"
            placeholder="Address"
            className={inputClasses}
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>

          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="font-semibold text-zinc-900 transition hover:text-zinc-600"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;