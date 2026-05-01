# AnimaFest Enterprise - Study & Work Abroad Portal

## Overview
AnimaFest Enterprise is a high-performance, decoupled internship platform designed for global scale. This project serves as a showcase of senior-level software engineering, architectural decision-making, and premium UI/UX design. The platform manages a relational ecosystem of over 2000 internship opportunities across 30+ countries, utilizing a "Pure JSON" backend architecture and a custom-built, library-free frontend design system.

Developed for: [Animafest Experience](https://www.animafestexperience.net/internshipsabroad/)

## Architectural Philosophy
The project follows a strict decoupled approach to ensure maximum scalability and maintainability.

### Backend (NestJS)
- **Pure JSON API**: The server functions exclusively as a data provider. No UI logic or HTML rendering occurs on the server side.
- **Relational Integrity**: Built with PostgreSQL and Drizzle ORM, the database manages complex relationships between Companies, Countries, Sectors, and Internships.
- **Enterprise Validation**: All requests are validated using Zod schemas at runtime to ensure type safety and data integrity.
- **Massive Seeding**: Utilizes Faker.js to simulate an enterprise-scale environment with over 2200 active records.

### Frontend (Nuxt 4)
- **Vanilla CSS & SCSS Modules**: To demonstrate deep CSS expertise, the project avoids Tailwind or other CSS frameworks. Styling is handled via SCSS Modules and the BEM methodology.
- **Design System**: A custom design system built from the ground up using CSS Design Tokens and Variables.
- **Atomic Design**: Components are organized into Atoms, Molecules, and Organisms to ensure reusability and clean code standards.
- **State Management**: Centralized application state is managed via Pinia.
- **Performance**: Implements server-side pagination to handle massive datasets without compromising frontend performance.

---

# AnimaFest Enterprise - Yurtdışı Eğitim ve Çalışma Portalı

## Genel Bakış
AnimaFest Enterprise, küresel ölçekte çalışmak üzere tasarlanmış, yüksek performanslı ve ayrıştırılmış (decoupled) bir staj platformudur. Bu proje; senior seviye yazılım mühendisliği yetkinliklerini, mimari karar verme süreçlerini ve premium UI/UX tasarım uygulamalarını sergilemek amacıyla geliştirilmiştir. Platform, 30'dan fazla ülkede 2000'den fazla staj fırsatından oluşan ilişkisel bir ekosistemi, "Pure JSON" backend mimarisi ve kütüphane bağımsız özel bir frontend tasarım sistemi ile yönetmektedir.

Şunun için geliştirilmiştir: [Animafest Experience](https://www.animafestexperience.net/internshipsabroad/)

## Mimari Felsefe
Proje, maksimum ölçeklenebilirlik ve sürdürülebilirlik sağlamak amacıyla katı bir ayrıştırılmış yaklaşım izler.

### Backend (NestJS)
- **Pure JSON API**: Sunucu tamamen bir veri sağlayıcı olarak işlev görür. Sunucu tarafında hiçbir UI mantığı veya HTML render işlemi gerçekleşmez.
- **İlişkisel Bütünlük**: PostgreSQL ve Drizzle ORM ile inşa edilen veritabanı; Şirketler, Ülkeler, Sektörler ve Stajlar arasındaki karmaşık ilişkileri yönetir.
- **Kurumsal Doğrulama**: Tüm istekler, tip güvenliğini ve veri bütünlüğünü sağlamak için çalışma zamanında Zod şemaları ile valide edilir.
- **Devesa Veri Yapısı**: 2200'den fazla aktif kayıtla kurumsal ölçekli bir ortamı simüle etmek için Faker.js kullanır.

### Frontend (Nuxt 4)
- **Vanilla CSS & SCSS Modules**: Derin CSS uzmanlığını sergilemek amacıyla Tailwind veya diğer CSS framework'lerinden kaçınılmıştır. Stil yönetimi SCSS Modules ve BEM metodolojisi ile sağlanmaktadır.
- **Tasarım Sistemi**: CSS Tasarım Token'ları ve Değişkenleri kullanılarak sıfırdan inşa edilmiş özel bir tasarım sistemi.
- **Atomic Design**: Bileşenler, kod temizliği ve yeniden kullanılabilirlik standartlarını korumak için Atomlar, Moleküller ve Organizmalar şeklinde organize edilmiştir.
- **Durum Yönetimi**: Uygulamanın merkezi durumu Pinia üzerinden yönetilmektedir.
- **Performans**: Devasa veri setlerini frontend performansından ödün vermeden yönetmek için sunucu taraflı sayfalama (pagination) uygular.
