import React from 'react';
import { BsTrophy, BsStar, BsAward } from 'react-icons/bs';
import './TopLecteurs.css';

const TopLecteurs = () => {
  const lecteurs = [
    {
      nom: "Marie Kabila",
      lectures: 287,
      avatar: "MK",
      progression: 95,
      rank: 1,
      badge: <BsTrophy />
    },
    {
      nom: "Jean Tshisekedi",
      lectures: 245,
      avatar: "JT",
      progression: 85,
      rank: 2,
      badge: <BsStar />
    },
    {
      nom: "Grace Mbuyi",
      lectures: 198,
      avatar: "GM",
      progression: 70,
      rank: 3,
      badge: <BsAward />
    },
    {
      nom: "Patrick Lumbu",
      lectures: 176,
      avatar: "PL",
      progression: 62,
      rank: 4,
      badge: null
    },
    {
      nom: "Sarah Ngoma",
      lectures: 154,
      avatar: "SN",
      progression: 55,
      rank: 5,
      badge: null
    }
  ];

  return (
    <section className="top-lecteurs">
      <div className="top-lecteurs-container">
        <h2 className="section-title">Top 5 Lecteurs du Mois</h2>
        <p className="section-subtitle">
          Les membres les plus actifs de novembre 2025
        </p>

        <div className="lecteurs-list">
          {lecteurs.map((lecteur, index) => (
            <div 
              key={index} 
              className={`lecteur-card ${lecteur.rank === 1 ? 'top-lecteur' : ''}`}
            >
              <div className="lecteur-rank">
                <span className="rank-number">#{lecteur.rank}</span>
                {lecteur.badge && (
                  <span className="rank-badge">{lecteur.badge}</span>
                )}
              </div>

              <div className="lecteur-avatar">
                <div className="avatar-circle">{lecteur.avatar}</div>
              </div>

              <div className="lecteur-info">
                <h3 className="lecteur-nom">{lecteur.nom}</h3>
                <p className="lecteur-lectures">
                  <strong>{lecteur.lectures}</strong> lectures
                </p>
              </div>

              <div className="lecteur-progression">
                <div className="progression-bar">
                  <div 
                    className="progression-fill" 
                    style={{ width: `${lecteur.progression}%` }}
                  ></div>
                </div>
                <span className="progression-text">{lecteur.progression}%</span>
              </div>
            </div>
          ))}
        </div>

        {lecteurs.length > 0 && (
          <div className="champion-highlight">
            <BsTrophy className="champion-icon" />
            <p>
              <strong>{lecteurs[0].nom}</strong> est le champion du mois avec{' '}
              <strong>{lecteurs[0].lectures} lectures</strong> !
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopLecteurs;
