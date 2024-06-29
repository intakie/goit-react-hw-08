import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

const getAuthToken = state => state.auth.token;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);
    try {
      const response = await axios.get(`${BASE_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);
    console.log('Add Contact Operation:', contact);
    try {
      const response = await axios.post(`${BASE_URL}/contacts`, contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Add Contact Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Add Contact Error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);
    try {
      await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, contactData }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getAuthToken(state);
    try {
      const response = await axios.patch(
        `${BASE_URL}/contacts/${contactId}`,
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
