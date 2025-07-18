--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Debian 16.9-1.pgdg120+1)
-- Dumped by pg_dump version 16.9 (Debian 16.9-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pratos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pratos (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    preco numeric(10,2),
    restaurante_id integer
);


ALTER TABLE public.pratos OWNER TO postgres;

--
-- Name: pratos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pratos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pratos_id_seq OWNER TO postgres;

--
-- Name: pratos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pratos_id_seq OWNED BY public.pratos.id;


--
-- Name: restaurantes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurantes (
    id integer NOT NULL,
    nome character varying(100),
    cidade character varying(100)
);


ALTER TABLE public.restaurantes OWNER TO postgres;

--
-- Name: restaurantes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.restaurantes_id_seq OWNER TO postgres;

--
-- Name: restaurantes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurantes_id_seq OWNED BY public.restaurantes.id;


--
-- Name: pratos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pratos ALTER COLUMN id SET DEFAULT nextval('public.pratos_id_seq'::regclass);


--
-- Name: restaurantes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurantes ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_id_seq'::regclass);


--
-- Data for Name: pratos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pratos (id, nome, preco, restaurante_id) FROM stdin;
\.


--
-- Data for Name: restaurantes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurantes (id, nome, cidade) FROM stdin;
\.


--
-- Name: pratos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pratos_id_seq', 1, false);


--
-- Name: restaurantes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurantes_id_seq', 1, false);


--
-- Name: pratos pratos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pratos
    ADD CONSTRAINT pratos_pkey PRIMARY KEY (id);


--
-- Name: restaurantes restaurantes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurantes
    ADD CONSTRAINT restaurantes_pkey PRIMARY KEY (id);


--
-- Name: pratos pratos_restaurante_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pratos
    ADD CONSTRAINT pratos_restaurante_id_fkey FOREIGN KEY (restaurante_id) REFERENCES public.restaurantes(id);


--
-- PostgreSQL database dump complete
--

