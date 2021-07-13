--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2021-07-13 20:26:15

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

--
-- TOC entry 5 (class 2615 OID 16394)
-- Name: CodeWind; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "CodeWind";


ALTER SCHEMA "CodeWind" OWNER TO postgres;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3032 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 208 (class 1259 OID 16443)
-- Name: assignment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.assignment (
    id smallint[] NOT NULL,
    name character varying(15)[] NOT NULL,
    faculty_id character varying(12)[] NOT NULL,
    start_date date,
    end_date date,
    question bigint NOT NULL,
    answer bigint NOT NULL,
    status smallint
);


ALTER TABLE public.assignment OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16441)
-- Name: assignment_answer_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assignment_answer_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.assignment_answer_seq OWNER TO postgres;

--
-- TOC entry 3033 (class 0 OID 0)
-- Dependencies: 207
-- Name: assignment_answer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assignment_answer_seq OWNED BY public.assignment.answer;


--
-- TOC entry 206 (class 1259 OID 16439)
-- Name: assignment_question_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.assignment_question_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.assignment_question_seq OWNER TO postgres;

--
-- TOC entry 3034 (class 0 OID 0)
-- Dependencies: 206
-- Name: assignment_question_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.assignment_question_seq OWNED BY public.assignment.question;


--
-- TOC entry 203 (class 1259 OID 16405)
-- Name: faculty; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.faculty (
    name character varying(20)[] NOT NULL,
    id character varying(12)[] NOT NULL,
    department character varying(15)[] NOT NULL,
    subject character varying(20)[] NOT NULL,
    contact_no bigint[] NOT NULL
);


ALTER TABLE public.faculty OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16415)
-- Name: parents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parents (
    name character varying(20)[] NOT NULL,
    student_id character varying(12)[] NOT NULL
);


ALTER TABLE public.parents OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16395)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    name character varying(20)[] NOT NULL,
    student_id character varying(12)[] NOT NULL,
    department character varying(15)[] NOT NULL,
    division "char" NOT NULL,
    roll_no smallint NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16428)
-- Name: subject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subject (
    name character varying(20)[] NOT NULL,
    department character varying(15)[] NOT NULL,
    faculty_id character varying(12)[] NOT NULL
);


ALTER TABLE public.subject OWNER TO postgres;

--
-- TOC entry 2875 (class 2604 OID 16446)
-- Name: assignment question; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignment ALTER COLUMN question SET DEFAULT nextval('public.assignment_question_seq'::regclass);


--
-- TOC entry 2876 (class 2604 OID 16447)
-- Name: assignment answer; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignment ALTER COLUMN answer SET DEFAULT nextval('public.assignment_answer_seq'::regclass);


--
-- TOC entry 3026 (class 0 OID 16443)
-- Dependencies: 208
-- Data for Name: assignment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.assignment (id, name, faculty_id, start_date, end_date, question, answer, status) FROM stdin;
\.


--
-- TOC entry 3021 (class 0 OID 16405)
-- Dependencies: 203
-- Data for Name: faculty; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.faculty (name, id, department, subject, contact_no) FROM stdin;
\.


--
-- TOC entry 3022 (class 0 OID 16415)
-- Dependencies: 204
-- Data for Name: parents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parents (name, student_id) FROM stdin;
\.


--
-- TOC entry 3020 (class 0 OID 16395)
-- Dependencies: 202
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (name, student_id, department, division, roll_no) FROM stdin;
\.


--
-- TOC entry 3023 (class 0 OID 16428)
-- Dependencies: 205
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subject (name, department, faculty_id) FROM stdin;
\.


--
-- TOC entry 3035 (class 0 OID 0)
-- Dependencies: 207
-- Name: assignment_answer_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assignment_answer_seq', 1, false);


--
-- TOC entry 3036 (class 0 OID 0)
-- Dependencies: 206
-- Name: assignment_question_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.assignment_question_seq', 1, false);


--
-- TOC entry 2880 (class 2606 OID 16414)
-- Name: faculty CONST_contact_no; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faculty
    ADD CONSTRAINT "CONST_contact_no" UNIQUE (contact_no);


--
-- TOC entry 2886 (class 2606 OID 16452)
-- Name: assignment assignment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignment
    ADD CONSTRAINT assignment_pkey PRIMARY KEY (id);


--
-- TOC entry 2882 (class 2606 OID 16412)
-- Name: faculty faculty_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.faculty
    ADD CONSTRAINT faculty_pkey PRIMARY KEY (id);


--
-- TOC entry 2884 (class 2606 OID 16422)
-- Name: parents parents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parents
    ADD CONSTRAINT parents_pkey PRIMARY KEY (student_id);


--
-- TOC entry 2878 (class 2606 OID 16402)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (student_id);


--
-- TOC entry 2887 (class 2606 OID 16423)
-- Name: parents FK_parents_students; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parents
    ADD CONSTRAINT "FK_parents_students" FOREIGN KEY (student_id) REFERENCES public.students(student_id);


--
-- TOC entry 2888 (class 2606 OID 16434)
-- Name: subject FK_subject_faculty; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT "FK_subject_faculty" FOREIGN KEY (faculty_id) REFERENCES public.faculty(id);


--
-- TOC entry 2889 (class 2606 OID 16453)
-- Name: assignment FK_subject_faculty; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.assignment
    ADD CONSTRAINT "FK_subject_faculty" FOREIGN KEY (faculty_id) REFERENCES public.faculty(id);


-- Completed on 2021-07-13 20:26:17

--
-- PostgreSQL database dump complete
--

