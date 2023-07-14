import { styled } from "styled-components";

export const Container = styled.form`
    h2{
        color: #FFFFFF;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        border: 1px solid #323238;
        background: #323238;
        color: #FFFFFF;

        font-weight: 400;
        font-size: 16px;

        & + input {
        margin-top: 1rem;
    }

    }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: #015F43;
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
  } 

 `