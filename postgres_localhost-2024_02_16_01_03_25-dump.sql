--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2

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
-- Name: app_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_user (
    agreed_to_terms boolean DEFAULT false,
    id bigint NOT NULL,
    name character varying(255),
    password character varying(255) NOT NULL,
    role character varying(255),
    username character varying(255) NOT NULL,
    CONSTRAINT app_user_role_check CHECK (((role)::text = ANY ((ARRAY['USER'::character varying, 'ADMIN'::character varying])::text[])))
);


ALTER TABLE public.app_user OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_user_id_seq OWNER TO postgres;

--
-- Name: app_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_user_id_seq OWNED BY public.app_user.id;


--
-- Name: sector; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sector (
    value integer NOT NULL,
    parent_id bigint,
    sector_id bigint NOT NULL,
    name character varying(255)
);


ALTER TABLE public.sector OWNER TO postgres;

--
-- Name: sector_sector_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sector_sector_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sector_sector_id_seq OWNER TO postgres;

--
-- Name: sector_sector_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sector_sector_id_seq OWNED BY public.sector.sector_id;


--
-- Name: user_sectors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_sectors (
    id bigint NOT NULL,
    sector_id bigint NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.user_sectors OWNER TO postgres;

--
-- Name: user_sectors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_sectors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_sectors_id_seq OWNER TO postgres;

--
-- Name: user_sectors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_sectors_id_seq OWNED BY public.user_sectors.id;


--
-- Name: app_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user ALTER COLUMN id SET DEFAULT nextval('public.app_user_id_seq'::regclass);


--
-- Name: sector sector_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sector ALTER COLUMN sector_id SET DEFAULT nextval('public.sector_sector_id_seq'::regclass);


--
-- Name: user_sectors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sectors ALTER COLUMN id SET DEFAULT nextval('public.user_sectors_id_seq'::regclass);


--
-- Data for Name: app_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_user (agreed_to_terms, id, name, password, role, username) FROM stdin;
\N	1	Mari Maasikas	$2a$10$wNiAfqyfjr5upUckms/J4eRO1znN4Vpisz1d90SPa4cQbfXO6zGA6	USER	test
\.


--
-- Data for Name: sector; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sector (value, parent_id, sector_id, name) FROM stdin;
1	\N	1	Manufacturing
19	1	2	Construction Materials
18	1	3	Electronics and Optics
6	1	4	Food and Beverage
342	4	5	Bakery & confectionery products
43	4	6	Beverages
5	1	7	Printing
8	1	8	Wood
3	\N	9	Other
227	\N	10	Service
\.


--
-- Data for Name: user_sectors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_sectors (id, sector_id, user_id) FROM stdin;
1	1	1
2	7	1
3	8	1
\.


--
-- Name: app_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_user_id_seq', 1, true);


--
-- Name: sector_sector_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sector_sector_id_seq', 10, true);


--
-- Name: user_sectors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_sectors_id_seq', 3, true);


--
-- Name: app_user app_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_pkey PRIMARY KEY (id);


--
-- Name: app_user app_user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_user
    ADD CONSTRAINT app_user_username_key UNIQUE (username);


--
-- Name: sector sector_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sector
    ADD CONSTRAINT sector_pkey PRIMARY KEY (sector_id);


--
-- Name: user_sectors user_sectors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sectors
    ADD CONSTRAINT user_sectors_pkey PRIMARY KEY (id);


--
-- Name: user_sectors fkej8m5blixkuy1s81eaqm09fw4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sectors
    ADD CONSTRAINT fkej8m5blixkuy1s81eaqm09fw4 FOREIGN KEY (sector_id) REFERENCES public.sector(sector_id);


--
-- Name: user_sectors fkm9q8hijjm0by7f69ot816yjth; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_sectors
    ADD CONSTRAINT fkm9q8hijjm0by7f69ot816yjth FOREIGN KEY (user_id) REFERENCES public.app_user(id);


--
-- Name: sector fkn6jfoe213mlnafoaiaolvh5c8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sector
    ADD CONSTRAINT fkn6jfoe213mlnafoaiaolvh5c8 FOREIGN KEY (parent_id) REFERENCES public.sector(sector_id);


--
-- PostgreSQL database dump complete
--

