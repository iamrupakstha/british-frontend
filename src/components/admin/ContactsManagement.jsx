import React, { useState, useEffect } from 'react';
import { contactAPI } from '../../services/api';
import toast from 'react-hot-toast';
import './css/ContactsManagement.css';

const ContactsManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, [statusFilter, currentPage, search]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: 10
      };
      
      if (statusFilter) params.status = statusFilter;
      if (search) params.search = search;
      
      const response = await contactAPI.getAll(params);
      
      setContacts(response.data.contacts || []);
      setTotalPages(response.data.totalPages || 1);
      setTotal(response.data.total || 0);
    } catch (error) {
      toast.error('Failed to fetch contacts');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewContact = async (contact) => {
    try {
      // If not read, mark as read
      if (!contact.isRead) {
        await contactAPI.getById(contact._id);
        contact.isRead = true;
        contact.status = 'read';
      }
      setSelectedContact(contact);
    } catch (error) {
      toast.error('Failed to load contact details');
      console.error(error);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await contactAPI.updateStatus(id, { status });
      toast.success(`Status updated to ${status}`);
      fetchContacts();
    } catch (error) {
      toast.error('Failed to update status');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    
    try {
      await contactAPI.delete(id);
      toast.success('Contact deleted successfully');
      fetchContacts();
    } catch (error) {
      toast.error('Failed to delete contact');
      console.error(error);
    }
  };

  const getStatusBadgeClass = (status) => {
    const classes = {
      'pending': 'status-pending',
      'read': 'status-read',
      'replied': 'status-replied',
      'archived': 'status-archived'
    };
    return classes[status] || 'status-pending';
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInterestedInBadge = (type) => {
    const classes = {
      'Study Abroad': 'interest-study',
      'Visa Assistance': 'interest-visa',
      'Course Information': 'interest-course',
      'General Inquiry': 'interest-general',
      'Other': 'interest-other'
    };
    return classes[type] || 'interest-other';
  };

  if (loading && contacts.length === 0) {
    return <div className="loading-spinner">Loading contacts...</div>;
  }

  return (
    <div className="contacts-management">
      {/* Header */}
      <div className="management-header">
        <div>
          <h1>Contact Management</h1>
          <p>{total} contacts found</p>
        </div>
        <div className="header-stats">
          <span className="stat-badge pending">
            Pending: {contacts.filter(c => c.status === 'pending').length}
          </span>
          <span className="stat-badge read">
            Read: {contacts.filter(c => c.status === 'read').length}
          </span>
          <span className="stat-badge replied">
            Replied: {contacts.filter(c => c.status === 'replied').length}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-wrapper">
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <button className="btn-refresh" onClick={fetchContacts}>
          Refresh
        </button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Interested In</th>
              <th>Status</th>
              <th>Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty-state">No contacts found</td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr key={contact._id} className={!contact.isRead ? 'unread' : ''}>
                  <td>{(currentPage - 1) * 10 + index + 1}</td>
                  <td>
                    <div className="contact-cell">
                      <span className="contact-name">{contact.fullName}</span>
                      <span className="contact-phone">{contact.phone}</span>
                    </div>
                  </td>
                  <td>{contact.email}</td>
                  <td>
                    <span className="subject-text">{contact.subject}</span>
                  </td>
                  <td>
                    <span className={`interest-badge ${getInterestedInBadge(contact.interestedIn)}`}>
                      {contact.interestedIn}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusBadgeClass(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td>{formatDate(contact.createdAt)}</td>
                  <td>
                    <div className="action-group">
                      <button 
                        className="btn-action view"
                        onClick={() => handleViewContact(contact)}
                      >
                        View
                      </button>
                      <select 
                        className="status-select"
                        value={contact.status}
                        onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                        <option value="archived">Archived</option>
                      </select>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleDelete(contact._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* View Modal */}
      {selectedContact && (
        <div className="modal-overlay" onClick={() => setSelectedContact(null)}>
          <div className="modal contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Contact Details</h2>
              <button className="modal-close" onClick={() => setSelectedContact(null)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="contact-details">
                <div className="detail-row">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">{selectedContact.fullName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{selectedContact.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{selectedContact.phone}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Subject</span>
                  <span className="detail-value">{selectedContact.subject}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Interested In</span>
                  <span className="detail-value">
                    <span className={`interest-badge ${getInterestedInBadge(selectedContact.interestedIn)}`}>
                      {selectedContact.interestedIn}
                    </span>
                  </span>
                </div>
                {selectedContact.preferredCountry && (
                  <div className="detail-row">
                    <span className="detail-label">Preferred Country</span>
                    <span className="detail-value">{selectedContact.preferredCountry}</span>
                  </div>
                )}
                {selectedContact.preferredCourse && (
                  <div className="detail-row">
                    <span className="detail-label">Preferred Course</span>
                    <span className="detail-value">{selectedContact.preferredCourse}</span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">Status</span>
                  <span className={`status-badge ${getStatusBadgeClass(selectedContact.status)}`}>
                    {selectedContact.status}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Received</span>
                  <span className="detail-value">{formatDate(selectedContact.createdAt)}</span>
                </div>
                <div className="detail-row full-width">
                  <span className="detail-label">Message</span>
                  <div className="message-content">{selectedContact.message}</div>
                </div>
              </div>

              <div className="modal-actions">
                <button 
                  className="btn-close-modal"
                  onClick={() => setSelectedContact(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsManagement;