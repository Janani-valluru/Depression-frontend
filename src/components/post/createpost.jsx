import React, { useState, useEffect } from "react";
import {
  styled,
  Box,
  InputBase,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { categories, API_URL } from "../constants/data"; // Import categories
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  marginTop: "15vh",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "60vh",
  margin: "20px 0",
  objectFit: "cover",
});

const FormBox = styled(Box)(({ theme }) => ({
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
  backgroundImage:
    "linear-gradient(to left bottom, #eb8693, #f0a492, #efc2a0, #edddbd, #f3f5e1)",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    margin: "20px",
  },
}));

const StyledFormControl = styled(FormControl)`
  margin-top: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin-top: 10px;
  margin: 0 30px;
  font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: none;

  margin-top: 60px;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`;

const CreatePost = () => {
  const url =
    "https://img.freepik.com/free-vector/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg?t=st=1723728797~exp=1723732397~hmac=92eed2a85cf0f3af9cc7c5eb61e082632a666522a0f18998ca438d691739c5d2&w=996";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Depression");
  const { user } = useAuthContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  const setPost = async () => {
    if (!user) return toast.error("Please login to post");
    if (!title || !description || !category)
      return toast.error("Please fill all the fields");
    const data = {
      username: user.name,
      title,
      description,
      category: category,
    };
    const response = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      toast.success("Post created successfully");
      setTimeout(() => {
        window.location.href = "/blog";
      }, 2000);
    }
    if (!response.ok) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Container>
      <Image src={url} alt="post" />
      <FormBox>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledFormControl>
          <InputTextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Title"
          />
        </StyledFormControl>
        <Textarea
          minRows={3}
          placeholder="Tell your story..."
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={() => setPost()}
          variant="contained"
          style={{
            backgroundColor: "purple",
            color: "white",
            height: "40px",
            display: "block",
            margin: "0 auto",
          }}
        >
          Publish
        </Button>
      </FormBox>
    </Container>
  );
};

export default CreatePost;
