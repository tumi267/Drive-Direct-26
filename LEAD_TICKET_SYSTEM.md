# LEAD_TICKET_SYSTEM.md

# Drive Direct 26

## Lead & Ticket Management System

This document defines the architecture, workflow, and implementation plan for the Drive Direct 26 Lead & Ticket Management System.

The goal is to build a scalable CRM-style workflow that manages a customer from their initial enquiry through quotation, finance, approval, delivery, and long-term archival.

---

# Vision

Drive Direct should not simply capture enquiries.

Every enquiry becomes a managed business process that can be tracked from beginning to end.

The Lead & Ticket Management System forms the core CRM of Drive Direct 26.

---

# Core Principles

* Every enquiry becomes a ticket.
* Every ticket has a unique reference number.
* Tickets are never deleted.
* Every action is audited.
* Workflows are configurable.
* Access is role based.
* Departments work from queues.
* Tickets can be claimed by staff.
* Archived tickets remain searchable.
* Every department only sees the work relevant to them.

---

# High Level Workflow

Customer submits enquiry

↓

New Ticket Created

↓

Sales Queue

↓

Sales Claims Ticket

↓

Qualification

↓

Quote Created

↓

Finance Review *(optional)*

↓

Management Approval *(optional)*

↓

Quote Sent

↓

Awaiting Customer Decision

↓

Accepted

↓

Finance Processing

↓

Ready For Delivery

↓

Delivered

↓

Closed

OR

Cancelled

↓

Archived

---

# Departments

## Sales

Responsibilities

* Claim ticket
* Contact customer
* Gather requirements
* Prepare quotation
* Update ticket
* Internal notes

---

## Finance

Responsibilities

* Review quotation
* Finance applications
* Deposits
* Invoices
* Payment processing
* Financing

---

## Management

Responsibilities

* Discount approvals
* High-value approvals
* Pricing exceptions
* Reassign tickets
* Final approvals

---

## Operations

Responsibilities

* Vehicle preparation
* Licensing
* Accessories
* Delivery scheduling
* Customer handover
* Close delivery

---

# Ticket Statuses

* New Enquiry
* Assigned to Sales
* Contacted
* Quote in Progress
* Finance Review
* Awaiting Management Approval
* Quote Sent
* Awaiting Customer Decision
* Accepted
* Finance Processing
* Ready for Delivery
* Delivered
* Closed
* Cancelled
* Archived

---

# Ticket Information

## Customer

* Name
* Email
* Phone

---

## Vehicle

* Vehicle ID
* Listing
* Dealer

---

## Ownership

* Department
* Claimed By
* Assigned User

---

## Workflow

* Current Stage
* Current Status

---

## Notes

Internal notes attached to the ticket.

---

## Attachments

* Finance documents
* Driver licence
* Invoice
* Proof of Payment
* Signed quotation
* Images
* Other supporting documents

---

# Audit Trail

Every action is permanently recorded.

Each activity stores:

* User
* Timestamp
* Action
* Previous Status
* New Status

Example

09:14 Ticket Created

09:16 Assigned to Sales

09:20 James Claimed Ticket

09:45 Quote Created

10:15 Sent To Finance

11:00 Finance Approved

11:20 Quote Sent

Nothing is deleted.

The audit trail is append-only.

---

# Workflow Configuration

The workflow must be configurable.

Example A

Sales

↓

Finance

↓

Delivery

---

Example B

Sales

↓

Management

↓

Finance

↓

Delivery

---

Example C

Sales

↓

Delivery

Workflow stages can be enabled or disabled depending on dealership requirements.

---

# Permissions

## Owner

* Full system access
* Configure workflow
* View reports
* Manage users
* Override workflow

---

## Manager

* View all tickets
* Reassign tickets
* Approve tickets
* Manage staff
* View reports

---

## Sales

* View claimed tickets
* Claim tickets
* Update tickets
* Send quotations

---

## Finance

* Finance processing
* Payments
* Invoices
* Finance approval

---

## Operations

* Delivery
* Vehicle preparation
* Close delivery

---

# Archive Policy

Tickets are never deleted.

Retention period

Minimum 5 years.

Archive supports

* Search
* CSV Export
* Excel Export
* PDF Export

---

# Development Checklist

## Phase 1 — Database

* [ ] Ticket Model
* [ ] Ticket Status Enum
* [ ] Department Enum
* [ ] Activity Model
* [ ] Note Model
* [ ] Attachment Model

---

## Phase 2 — CRUD

* [ ] Create Ticket
* [ ] Get Ticket
* [ ] List Tickets
* [ ] Claim Ticket
* [ ] Update Ticket Status
* [ ] Archive Ticket

---

## Phase 3 — API

* [ ] Create Ticket API
* [ ] Ticket Queue API
* [ ] Claim Ticket API
* [ ] Status Update API
* [ ] Archive API

---

## Phase 4 — Public Marketplace

* [ ] Vehicle Enquiry Form
* [ ] Ticket Creation

---

## Phase 5 — Dealer CRM

* [ ] Sales Queue
* [ ] Finance Queue
* [ ] Management Queue
* [ ] Operations Queue
* [ ] My Tickets
* [ ] Ticket Details
* [ ] Activity Timeline
* [ ] Notes
* [ ] Attachments

---

## Phase 6 — Dashboard

* [ ] New Tickets
* [ ] My Tickets
* [ ] Awaiting Approval
* [ ] Ready For Delivery
* [ ] Closed Today

---

## Phase 7 — Reporting

* [ ] CSV Export
* [ ] Excel Export
* [ ] PDF Export

---

# Future Enhancements

* Workflow Builder
* SLA Timers
* Email Integration
* WhatsApp Integration
* Calendar Integration
* Customer Portal
* Follow-up Reminders
* Notifications
* Analytics Dashboard
* AI-assisted lead summaries
* Automated workflow rules

---

# MVP Goal

By the end of the MVP, Drive Direct 26 will provide dealerships with a complete workflow from customer enquiry to vehicle delivery, supported by:

* Role-based security
* Department queues
* Ticket claiming
* Full audit trails
* Configurable workflows
* Long-term archival
* Reporting and exports

This system forms the operational heart of the Drive Direct dealership CRM.
