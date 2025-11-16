import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BsBook, BsDownload, BsPieChart, BsPeople, BsTrophy } from 'react-icons/bs';
import './Statistiques.css';

const Statistiques = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Calculer les dates de début et fin de l'année en cours
        const today = new Date();
        const year = today.getFullYear();
        const dateDebut = `${year}-01-01`;
        const dateFin = `${year}-12-31`;
        
        const response = await fetch(`http://localhost:8000/api/bnn/statistiques/?date_debut=${dateDebut}&date_fin=${dateFin}`);
        const data = await response.json();
        
        setStatsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="statistiques">
        <div className="statistiques-container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Chargement des statistiques...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!statsData || !statsData.totaux) {
    return (
      <section className="statistiques">
        <div className="statistiques-container">
          <div className="error-message">
            <p>Impossible de charger les statistiques pour le moment.</p>
          </div>
        </div>
      </section>
    );
  }

  const { totaux, data, top_5_utilisateurs, ressources_top, conclusion } = statsData;

  // Préparer les données par rôle pour le graphique
  const dataParRole = data
    .filter(item => item.role && item.role !== '')
    .reduce((acc, item) => {
      const existing = acc.find(x => x.role === item.role);
      if (existing) {
        existing.consultations += item.total_consultations;
        existing.telechargements += item.total_telechargements;
      } else {
        acc.push({
          role: item.role.charAt(0).toUpperCase() + item.role.slice(1),
          consultations: item.total_consultations,
          telechargements: item.total_telechargements
        });
      }
      return acc;
    }, [])
    .filter(item => item.consultations > 0 || item.telechargements > 0);

  // Préparer les données par sexe pour le graphique circulaire
  const dataParSexe = data
    .filter(item => item.sexe && item.sexe !== '')
    .reduce((acc, item) => {
      const existing = acc.find(x => x.sexe === item.sexe);
      if (existing) {
        existing.value += item.total_consultations;
      } else {
        acc.push({
          name: item.sexe === 'masculin' ? 'Hommes' : 'Femmes',
          sexe: item.sexe,
          value: item.total_consultations
        });
      }
      return acc;
    }, [])
    .filter(item => item.value > 0);

  const COLORS = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];

  const stats = [
    {
      title: "Consultations",
      value: totaux.consultations.toLocaleString(),
      change: totaux.evolution_pourcentage.consultations ? `${totaux.evolution_pourcentage.consultations > 0 ? '+' : ''}${totaux.evolution_pourcentage.consultations}%` : '0%',
      trend: totaux.tendance.consultations,
      color: "#10b981",
      icon: <BsBook />
    },
    {
      title: "Téléchargements",
      value: totaux.telechargements.toLocaleString(),
      change: totaux.evolution_pourcentage.telechargements ? `${totaux.evolution_pourcentage.telechargements > 0 ? '+' : ''}${totaux.evolution_pourcentage.telechargements}%` : '0%',
      trend: totaux.tendance.telechargements,
      color: "#3b82f6",
      icon: <BsDownload />
    },
    {
      title: "Utilisateurs actifs",
      value: top_5_utilisateurs ? top_5_utilisateurs.length.toLocaleString() : '0',
      change: "durant l'année",
      trend: "neutral",
      color: "#f59e0b",
      icon: <BsPeople />
    }
  ];

  const year = new Date().getFullYear();

  return (
    <section className="statistiques">
      <div className="statistiques-container">
        <h2 className="section-title">Statistiques {year}</h2>
        <p className="section-subtitle">
          Aperçu de l'activité de la plateforme pour l'année en cours
        </p>

        <div className="stats-cards">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-title">{stat.title}</h3>
              <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className={`stat-change ${stat.trend === 'hausse' ? 'positive' : stat.trend === 'baisse' ? 'negative' : 'neutral'}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {dataParSexe.length > 0 && (
          <div className="charts-grid">
            <div className="chart-container">
              <h3 className="chart-title">Répartition par genre</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={dataParSexe}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataParSexe.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Ressources les plus populaires */}
        {(ressources_top?.consultations?.length > 0 || ressources_top?.telechargements?.length > 0) && (
          <div className="ressources-top-section">
            <h3 className="section-subtitle">Ressources les plus populaires</h3>
            <div className="ressources-grid">
              {ressources_top.consultations && ressources_top.consultations.length > 0 && (
                <div className="ressources-card">
                  <h4><BsBook className="ressource-icon" /> Plus consultées</h4>
                  <ul className="ressources-list">
                    {ressources_top.consultations.slice(0, 5).map((ressource, index) => (
                      <li key={index}>
                        <span className="ressource-rank">#{index + 1}</span>
                        <span className="ressource-title">{ressource.ressource__titre}</span>
                        <span className="ressource-count">{ressource.total}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {ressources_top.telechargements && ressources_top.telechargements.length > 0 && (
                <div className="ressources-card">
                  <h4><BsDownload className="ressource-icon" /> Plus téléchargées</h4>
                  <ul className="ressources-list">
                    {ressources_top.telechargements.slice(0, 5).map((ressource, index) => (
                      <li key={index}>
                        <span className="ressource-rank">#{index + 1}</span>
                        <span className="ressource-title">{ressource.ressource__titre}</span>
                        <span className="ressource-count">{ressource.total}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Top utilisateurs */}
        {top_5_utilisateurs && top_5_utilisateurs.length > 0 && (
          <div className="top-users-section">
            <h3 className="chart-title"><BsTrophy className="trophy-icon" /> Top utilisateurs les plus actifs</h3>
            <div className="top-users-grid">
              {top_5_utilisateurs.slice(0, 5).map((user, index) => (
                <div key={user.id} className="top-user-card">
                  <div className="user-rank">#{index + 1}</div>
                  <div className="user-info">
                    <h4>{user.nom} {user.prenom}</h4>
                    <div className="user-stats">
                      <span className="user-stat-item">
                        <span className="stat-label">Consultations:</span>
                        <span className="stat-number">{user.total_consultations}</span>
                      </span>
                      <span className="user-stat-item">
                        <span className="stat-label">Téléchargements:</span>
                        <span className="stat-number">{user.total_telechargements}</span>
                      </span>
                      <span className="user-stat-item total">
                        <span className="stat-label">Total activité:</span>
                        <span className="stat-number highlight">{user.total_activite}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistiques;
