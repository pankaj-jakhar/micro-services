
CREATE DATABASE api_gateway

-- public.domains definition

-- Drop table

-- DROP TABLE public.domains;

CREATE TABLE public.domains (
	id serial4 NOT NULL,
	"name" varchar(40) NULL,
	secure bool NULL,
	hostname varchar(100) NULL,
	port varchar(100) NULL,
	status bool NULL,
	CONSTRAINT domains_pkey PRIMARY KEY (id)
);


INSERT INTO public.domains
(id, "name", secure, hostname, port, status)
VALUES(1, 'localhost', false, 'localhost', '4000', true);
INSERT INTO public.domains
(id, "name", secure, hostname, port, status)
VALUES(2, 'localhost', false, 'localhost', '4005', true);


-- public.routes definition

-- Drop table

-- DROP TABLE public.routes;
DROP TABLE public.routes;

CREATE TABLE public.routes (
	id serial4 NOT NULL,
	"name" varchar(40) NULL,
	"path" varchar(100) NULL,
	target_path varchar(100) NULL,
	secure bool NULL,
	hostname varchar(100) NULL,
	port varchar(100) NULL,
	public bool NULL,
	CONSTRAINT routes_pkey PRIMARY KEY (id)
);


INSERT INTO public.routes
(id, "name", "path", target_path, secure, hostname, port, public)
VALUES(1, 'get names', '/visits', '/visits/gets',false , 'localhost', '4001', false);
INSERT INTO public.routes
(id, "name", "path", target_path, secure, hostname, port, public)
VALUES(2, 'get names', '/mains', '/mains',false , 'localhost', '4001', true);





