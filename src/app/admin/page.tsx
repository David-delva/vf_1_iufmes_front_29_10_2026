'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { ContactMessage } from '@/types';
import { Mail, Phone, Calendar, LogIn, AlertCircle, Newspaper, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PaginationMeta {
  current_page: number;
  last_page: number;
  total: number;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchMessages(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchMessages = async (targetPage: number) => {
    try {
      const response = await api.get('/contact', { params: { page: targetPage } });
      setMessages(response.data.data);
      setMeta(response.data.meta ?? null);
      setError(null);
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError('Non authentifié. Veuillez vous connecter.');
      } else {
        setError('Erreur lors du chargement des messages.');
      }
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await api.patch(`/contact/${id}`, { status });
      fetchMessages(page);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-md">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Accès refusé</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/admin/login')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition"
          >
            <LogIn className="w-5 h-5" />
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-primary-800">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button
          onClick={() => router.push('/admin/news')}
          className="bg-gradient-to-r from-primary to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-xl group-hover:scale-110 transition-transform">
              <Newspaper className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Actualités</h2>
              <p className="text-white/80">Gérer les actualités du site</p>
            </div>
          </div>
        </button>

        <div className="bg-gradient-to-r from-accent to-accent-600 text-gray-900 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <div className="bg-white/30 p-4 rounded-xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Messages</h2>
              <p className="text-gray-800">{meta?.total ?? messages.length} message(s) reçu(s)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Nom</th>
                <th className="px-6 py-3 text-left">Contact</th>
                <th className="px-6 py-3 text-left">Sujet</th>
                <th className="px-6 py-3 text-left">Message</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Statut</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{msg.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {msg.email}
                      </span>
                      {msg.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {msg.phone}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">{msg.subject}</td>
                  <td className="px-6 py-4 max-w-xs truncate">{msg.message}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(msg.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        msg.status === 'PENDING'
                          ? 'bg-yellow-100 text-yellow-800'
                          : msg.status === 'READ'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={msg.status}
                      onChange={(e) => updateStatus(msg.id, e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="READ">READ</option>
                      <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {meta && meta.last_page > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
            <span className="text-sm text-gray-500">
              Page {meta.current_page} / {meta.last_page} ({meta.total} au total)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={meta.current_page <= 1}
                className="p-2 border border-gray-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(meta.last_page, p + 1))}
                disabled={meta.current_page >= meta.last_page}
                className="p-2 border border-gray-300 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {messages.length === 0 && (
        <p className="text-center text-gray-500 mt-8">Aucun message pour le moment.</p>
      )}
    </div>
  );
}
