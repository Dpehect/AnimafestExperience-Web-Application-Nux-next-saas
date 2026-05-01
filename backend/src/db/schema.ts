import { pgTable, serial, text, varchar, timestamp, integer, boolean, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// --- Tables ---

export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  visaInfo: text('visa_info'),
  livingCosts: text('living_costs'),
});

export const sectors = pgTable('sectors', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
});

export const companies = pgTable('companies', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  logo: text('logo'),
  description: text('description'),
  website: varchar('website', { length: 255 }),
});

export const internships = pgTable('internships', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  description: text('description'),
  location: varchar('location', { length: 255 }),
  duration: integer('duration'), // in months
  isPaid: boolean('is_paid').default(false),
  salary: integer('salary'), // monthly amount in EUR
  countryId: integer('country_id').references(() => countries.id),
  companyId: integer('company_id').references(() => companies.id),
  sectorId: integer('sector_id').references(() => sectors.id),
  createdAt: timestamp('created_at').defaultNow(),
});

export const applications = pgTable('applications', {
  id: serial('id').primaryKey(),
  internshipId: uuid('internship_id').references(() => internships.id),
  userId: uuid('user_id'), // Mock user ID for now
  status: varchar('status', { length: 50 }).default('PENDING'), // PENDING, ACCEPTED, REJECTED
  appliedAt: timestamp('applied_at').defaultNow(),
});

// --- Relations ---

export const internshipsRelations = relations(internships, ({ one }) => ({
  country: one(countries, { fields: [internships.countryId], references: [countries.id] }),
  company: one(companies, { fields: [internships.companyId], references: [companies.id] }),
  sector: one(sectors, { fields: [internships.sectorId], references: [sectors.id] }),
}));

export const countriesRelations = relations(countries, ({ many }) => ({
  internships: many(internships),
}));

export const companiesRelations = relations(companies, ({ many }) => ({
  internships: many(internships),
}));
